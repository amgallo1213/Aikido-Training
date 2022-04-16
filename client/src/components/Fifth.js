const FifthKyu = () => {
    return ( 
        <div>
            <h1 style={{ color: 'rebeccapurple'}}>Fifth Kyu</h1>
            <div>
                <h3>Student Goals</h3>
                <p>Have a positive attitude towards his/her regular training and cooperate in creating a harmonious atmosphere in the operation of the dojo</p>
                <p>Regularly participate in dojo events</p>  
                <p>Take any workshop and clinic or more in present year</p>
                <p>Begin to take Gakushu classes (6)</p>
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
                        <td>Elbow Power #1, #2 with partner</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                
                    <tr>
                        <th>Basic Breakfalls</th>   
                    </tr>
                    <tr>
                        <td>Forward roll #1, #2, #3 - 10 times each</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Weapons Techniques</th>   
                    </tr>
                    <tr>
                        <td>Bokken: Solo 4 direction cuts</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Jo: Solo 8 kinds of stances:</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>(Tsune/Honte/Hasso/Gyaku Hasso/Tsuki/Hikiotoshi/Zenda/Shidare)</td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Techniques</th>
                    </tr>
                    <tr>
                        <td>Front strike Rotary throw #1(A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Front strike Rotary throw #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Side strike Arm lock control #1 (A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Side strike Arm lock control #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Front strike First Control Pin #1 (A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Front strike First Control Pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Previous Techniques</th>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                    
                    <tr>
                        <th>This Year's Technique</th>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>Front strike All direction throw #2 (A)</tr>
                </table>
            </form>
        </div>
     );
}
 
export default FifthKyu;