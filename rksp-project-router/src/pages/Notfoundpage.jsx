import { Link } from  'react-router-dom'
const Notfound = () => {
    return (
        <div>
            <h1>404</h1>
            <p> Go to <Link to="/">homepage</Link></p>
        </div>
    )
}

export {Notfound}