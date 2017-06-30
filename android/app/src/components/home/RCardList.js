import React, {Component} from 'react';
import {ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
import RCardSummary from './RCardSummary.js';

class RCardList extends Component {
    constructor(props) {
        super(props);
        /* 在构造函数中指定ListView的取值策略 */
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        /* dataSource传递数据 */
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462491256&di=191226b16f7d24872f4b91a13ad7cde2&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F47%2F78%2F55658PICN8u_1024.jpg",
                    text: "Some text to go in the body.",
                    favorite: 10,
                    height: 200
                },{
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496557021485&di=eee7cef35e38b79c83d7d201f04863c8&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Ffd039245d688d43f78186d707a1ed21b0ff43bfb.jpg",
                    text: "MY NAME IS LIUTAO.",
                    favorite: 24,
                    height: 400
                },{
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496557021706&di=8489d4f51b9a885df884e6b5967f1659&imgtype=0&src=http%3A%2F%2Fwww.lvyaos.com%2Fd%2Ffile%2Fshishang%2Fshizhuang%2F2017-05-05%2Fd2968d5886ec8fb82e1c8ad40000fa65.jpg",
                    text: "WHO ARE YOU.",
                    favorite: 1024,
                    height: 400
                },{
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462491256&di=191226b16f7d24872f4b91a13ad7cde2&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F47%2F78%2F55658PICN8u_1024.jpg",
                    text: "Some text to go in the body.",
                    favorite: 1024,
                    height: 400
                }
            ])
        }
    };

    componentDidMount() {
        console.log('component did mount');
    };

    _onPress=(row)=>{
        console.log(arguments);
        console.log(this.props);
        console.log(row);
        const { navigate } = this.props.navigation;

        navigate('RCardDetail', row);
    };
    _renderRow=(row:object, sectionID:number, rowID:number, highlightRow:(sectionID:number, rowID:number)=>void)=>{
        return (
            <TouchableOpacity onPress={()=>this._onPress(row)}>
                <RCardSummary img={row.img} text={row.text} favorite={row.favorite}/>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            >
            </ListView>
        );
    }
}
export default RCardList;
