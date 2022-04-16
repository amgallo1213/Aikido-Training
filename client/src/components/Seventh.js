const SeventhKyu = () => {
    return ( 
        <div>
            <h1 style={{ color: 'red'}}>Seventh Kyu</h1>
            <div>
                <h3>Student Goals</h3>
                <p>Hve a positive attitude towards his/her regular training and cooperate in creating a harmonious atmosphere in the operation of the dojo.</p>
                <p>Regularly participate in dojo events</p>  
            </div>
            <form>
                <table className="Table">
                    <tr>
                        <th>Basic Movements</th>
                        <th>Still Training | </th>
                        <th>Ready to Test</th>
                    </tr>
                    <tr>
                        <td>Basic Stance</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>After class exercise #1</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>After class exercise #2</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                
                    <tr>
                        <th>Basic Breakfalls</th>   
                    </tr>
                    <tr>
                        <td>Forward roll #3 (both hands on mat)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Backward roll #2</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Weapons Techniques</th>   
                    </tr>
                    <tr>
                        <td>Bokken: Solo six kinds</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Tanto: Solo #1</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Techniques</th>
                    </tr>
                    <tr>
                        <td>Side strike All direction throw pin #1(A)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Side strike All direction throw pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Front strike 3rd controll pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>One hand grasp Face thrust (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                    
                    <tr>
                        <th>Previous Techniques</th>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                </table>
            </form>
        </div>
     );
}
 
export default SeventhKyu;