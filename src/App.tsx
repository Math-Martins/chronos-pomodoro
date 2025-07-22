import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'
import './styles/global.css'
import './styles/theme.css'

export function App() {
    return (
        <>
            <Heading>
                Hello World 1
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit optio quasi quisquam porro ut accusamus deleniti alias, perspiciatis esse accusantium itaque eaque tempora quia voluptate laborum minima error veniam fugiat?
            </p>
        </>
    )
}
