import { createContext } from 'react';

const NameContext = createContext({
    state : {name : 'username', no:'01000000000'},
    actions : {
        setName : () =>{},
        setNumber:() =>{}
    }
});

const NameProvider = ({children}) =>{
    const [name, setName] = useState('username');
    const [no, setNo] = useState('initialState')
}

export default NameContext;
