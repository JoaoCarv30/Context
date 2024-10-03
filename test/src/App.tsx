
import './App.css'
import ApiUse from './components/ApiUse'
import { FetchApiProvider } from '../src/contexts/fetchApiContext'

function App() {

        return (

            <FetchApiProvider>
                <ApiUse/>
            </FetchApiProvider>
        )
}

export default App
