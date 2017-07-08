import React, {Component} from 'react';
import {ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
import RCardSummary from './RCardSummary.js';

const API_HOST = "http://45.32.59.248:8999";

export default class RCardList extends Component {
    constructor(props) {
        super(props);
        /* 在构造函数中指定ListView的取值策略 */
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        /* dataSource传递数据 */
        this.state = {
            dataSource: ds.cloneWithRows([
                /**
                {
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462491256&di=191226b16f7d24872f4b91a13ad7cde2&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F47%2F78%2F55658PICN8u_1024.jpg",
                    text: "Some text to go in the body.",
                    favorite: 10,
                    height: 200
                }
                */
            ])
        }
    };

    componentDidMount() {
        url = API_HOST + "/api/card/get";
        fetch(url)
        .then(
            function(response) {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(new Error(response.statusText));
                }
            }
        ).then((response)=>response.json())
        .then((responseJson)=>{
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({dataSource: ds.cloneWithRows(responseJson)}, function() {})
        })
        .catch((error) => {
            console.log(error);
        });
    };

    _onPress=(row)=>{
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
                enableEmptySections={true}
            >
            </ListView>
        );
    }
}
