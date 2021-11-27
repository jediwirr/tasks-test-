import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        })
    };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.head}>Tasks</Text>
                <Button
                    title='Add task'
                    onPress={
                        () => this.setState({
                            editField: true
                        })
                    }
                />
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
                        <Text key={task}>{task}</Text>
                    ))
                }
            </View>
        );
    };
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTask
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
