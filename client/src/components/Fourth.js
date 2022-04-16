const FourthKyu = () => {
    return ( 
        <div>
            <h1 style={{ color: 'blue'}}>Fourth Kyu</h1>
            <div>
                <h3>Student Goals</h3>
                <p>Have a positive attitude towards his/her regular training and cooperate in creating a harmonious atmosphere in the operation of the dojo</p>
                <p>Regularly participate in dojo events</p>  
                <p>Take any workshop and clinic or more in present year</p>
                <p>Gakushu classes (6 completed)</p>
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
                        <td>After class exercise #1, #2 with partner</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                
                    <tr>
                        <th>Basic Breakfalls</th>   
                    </tr>
                    <tr>
                        <td>Jumping breakfall (cross hand grasp) with partner</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Weapons Techniques</th>   
                    </tr>
                    <tr>
                        <td>Bokken: Eight directional cuts</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Tanto with partner: 6 kinds of knife movements</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Jo: Solo Jungyaku movements</td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Techniques</th>
                    </tr>
                    <tr>
                        <td>One hand grasp 4th control pin #1(A)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>One hand grasp 4th control pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Shoulder grasp 2nd control pin #1 (A)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Shoulder grasp 2nd control pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Both hand grasp All direction throw pin #1 (A)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Both hand grasp All direction throw pin #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Previous Techniques</th>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                    
                    <tr>
                        <th>This Year's Technique</th>
                        <td><input type="checkbox"></input></td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>Supplemental movement - Front Strike, shoulder grasp, </tr>
                    <tr>Side strike Side step-in throw #1 (A)</tr>
                </table>
            </form>
        </div>
     );
}
 
export default FourthKyu;