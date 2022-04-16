import { Link } from '@reach/router';

const IndexPage = () => {
    return ( 
        <div>
            <h2>What is Aikido?</h2>
            <div>
                <p>Aikido, the way of harmony, is a Japanese martial art that uses your partner's energy to deflect their attack.</p>
                <p><em>Doshinkan aikido</em> was created by Yukio Utada in .......</p>
                <div>
                    <Link to="/register">Join Dojo  |  </Link>
                    <Link to="/login">Student Login</Link>
            </div>
            </div>
        </div>
     );
}
 
export default IndexPage;