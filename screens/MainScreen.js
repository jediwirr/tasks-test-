import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addTask, setTaskDone } from '../store/actions';
import { styles } from '../styles/Style';

const Item = ({task, done, setDone}) => (
    <View style={styles.listItem}>
        <Icon style={{ marginEnd: 20 }} size={30} name={done ? 'check-square-o' : 'square-o'} onPress={setDone} />
        <Text style={{ fontSize: 18 }} key={task}>{task}</Text>
    </View>
);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            editField: false,
            value: ''
        });
    }

    _handlePress = () => {
        this.props.addTask({
            name: this.state.value,
            icon: 'square-o'
        });
        this.setState({
            editField: false,
            value: ''
        });
    };

    _setDone = (task) => {
        this.props.setTaskDone(task);
        this.setState({
            editField: false,
            value: ''
        });
    };

    _renderItem = ({item}) => (
        <Item task={item.name} done={item.done} setDone={() => this._setDone(item.name)} />
    );

    Header = () => (
        <View>
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
                    autoFocus
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
        </View>
    );

    render() {
        return(
            <FlatList 
                ListHeaderComponent={this.Header}
                style={styles.container}
                data={this.props.tasks}
                renderItem={this._renderItem}
                keyExtractor={item => item.name}
            />
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
        addTask,
        setTaskDone
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
