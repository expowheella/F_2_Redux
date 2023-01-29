import React from 'react';
import { connect } from 'react-redux';



class ReduxApp extends React.Component {
    addToStore(){
        console.log('add to store func', this.inputValue.value)
        this.props.addElement(this.inputValue.value)
        this.inputValue.value = ''
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Test page</h1>
                <input type="type" ref={(input) => {this.inputValue = input}} />
                <button onClick={this.addToStore.bind(this)}>Click Me!</button>
                
                <ul>
                    {this.props.libraries.map(item => 
                        <li key={item+Math.random()}>{item}</li>
                        )}
                </ul>

            </div>
        )
    }
}


// ReduxApp обернем в функцию connect для того, чтобы иметь доступ к store
export default connect (
    // mapStateToProps
    // перебирает state нашего store и передает его в props react компонента, чтобы дальше работать с ним
    state => ({
        libraries: state.libraryReducer,
        frameworks: state.frameworkReducer
    }),

    // mapDispatchToProps
    // инициирует событие для обновления store
    dispathch => ({
        addElement(element) {
            dispathch({
                type: "ADD_LIBRARY",
                payload: element
            })
        }
    })
)(ReduxApp);