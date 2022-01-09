import './App.css';
import { Component } from 'react';
import done from './done.png';
import cross from './cross.png';
import empty from './empty.png';

let iconArray = [cross, done, empty];

/*
let litest = document.querySelectorAll('.icon');

litest.forEach( (index) => {
    index.addEventListener("click", (c)=> { 
        c++;
            if (c>iconArray.length-1) {
                c=0
            }
        document.querySelector('.icon').src=iconArray[c];
    });
});
*/



export class ToDoList extends Component {

    state = {
        userInput : '',
        toDoList : [],
        icon : done,
        active: null
    }

    handleSubmit (e) {
        e.preventDefault ()
    }

    onChangeEvent (e) {
        this.setState({userInput: e});
    }

    addList (input) {
        if (input !=='') {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput : ''})
        }
    }

    crosseWord = (event) => {
        const li = event.target;
        li.classList.toggle('crossed');
    }


    crosseImg = (event) => {
        const img = event.target;

        let isActive = this.state.icon === done ? cross : done;
        this.setState({icon: isActive});
        //  ic.innerHTML =  cross ;
        console.log("cross")
    }

    
    
    iconChange = () => {
       // const iicon = i.target;
        this.setState({icon: cross});

        /*
        let iconArray = [cross, done, empty];

            let b=0;
            b++;
            if (b > iconArray.length-1) {
            b=0
            };

            this.setState({icon: iconArray[b]});
        }
        */
        //);

       }
    

    iconDone = (i) => {
        const iicon = i.target;
        this.setState({icon: done});
    }

    deleteItem() {
        
        let listArray = this.state.toDoList;
        listArray=[];
        this.setState({toDoList : listArray})

}

    render () {
        return (
            <form  onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" 
                    placeholder='Things to do today...' 
                    onChange = { (e) => {this.onChangeEvent (e.target.value)}} 
                    value = {this.state.userInput} />
                </div>
                <div>
                    <button className='btn addBtn' onClick={ ()=> this.addList(this.state.userInput)}>
                        Add
                    </button>
                </div>

                <ul>
                {this.state.toDoList.map((item, index) => (
                        <li 
                        onClick={ this.crosseWord } 
                      // onClick={this.crosseImg.bind(this, index)}
                        key={ index }
                       // className={this.state.active === index ? 'active' : ''}
                       >
                            <img className='icon' 
                            
                            //onClick={ this.iconChange }  
                            //onDoubleClick={ this.iconDone } 
                           // onClick={ this.crosseImg.bind(this, index) }
                         //  onClick={ this.crosseImg }
                            src={ this.state.icon } 
                            width="20px"  alt='icon'/>
                            {item} 
                        </li>
                    ))}
                </ul>

                <div>
                    <button className='btn delBtn'
                    onClick={ ()=> this.deleteItem() }>
                        Delete
                    </button>

                </div>
            </form>

        )
    }

}