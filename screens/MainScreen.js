import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addTask } from '../store/actions';
import { styles } from '../styles/Style';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            editField: false,
            value: '',
        });
    }

    componentDidMount() {
        console.log(this.props);
    };

    _handlePress = () => {
        this.props.addTask(this.state.value);
        this.setState({
            editField: false,
            value: ''
        });
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.head}>Tasks</Text>
                    <Icon
                        name="plus-square"
                        size={50}
                        color="#000"
                        onPress={
                            () => this.setState({
                                editField: !this.state.editField
                            })
                        }
                    />
                </View>
                {
                    this.state.editField ?
                    <TextInput 
                    style={styles.input}
                    maxLength={60} 
                    onSubmitEditing={this._handlePress}
                    onChangeText={text => {
                        this.setState({
                            value: text
                        });
                    }}
                    value={this.state.value}
                />
                : <></>
                }
                {
                    !this.props.tasks ? <></> :
                    this.props.tasks.map(task => (
                        <View style={styles.listItem}>
                            <Icon style={{ marginEnd: 20 }} size={30} name="square-o" />
                            <Text style={{ fontSize: 18 }} key={task}>{task}</Text>
                        </View>
                    ))
                }
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTask
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
