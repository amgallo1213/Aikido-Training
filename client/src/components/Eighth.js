const EighthKyu = () => {
    return ( 
        <div>
            <h1 style={{ color: 'orange'}}>Eighth Kyu</h1>
            <div>
                <h3>Student Goals</h3>
                <p>Have a positive attitude towards his/her regular training and cooperate in creating a harmonious atmosphere in the operation of the dojo</p>
                <p>Regularly participate in dojo events</p>  
            </div>
            <form>
                <table className="Table">
                    <tr>
                        <th>Basic Movements</th>
                        <th>Ready to Test</th>
                    </tr>
                    <tr>
                        <td>Basic Stance</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Elbow Power #1</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Elbow Power #2</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                
                    <tr>
                        <th>Basic Breakfalls</th>   
                    </tr>
                    <tr>
                        <td>Backward roll #1</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Back breakfall #1</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Back breakfall #2</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Weapons Techniques</th>   
                    </tr>
                    <tr>
                        <td>Tanto: 10 movements with partner</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Techniques</th>
                    </tr>
                    <tr>
                        <td>One hand grasp body change 1st control pin #1(A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>One hand grasp 1st control pin #2 (A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Face thrust step-in throw #1(G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Face thrust step-in throw #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                    
                    <tr>
                        <th>Previous Techniques</th>
                        <td><input type="checkbox"></input></td>
                    </tr>
                </table>
            </form>
        </div>
     );
}
 
export default EighthKyu;