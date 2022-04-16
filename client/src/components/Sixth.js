const SixthKyu = () => {
    return ( 
        <div>
            <h1 style={{ color: 'green'}}>Sixth Kyu</h1>
            <div>
                <h3>Student Goals</h3>
                <p>Have a positive attitude towards his/her regular training and cooperate in creating a harmonious atmosphere in the operation of the dojo</p>
                <p>Regularly participate in dojo events</p>  
                <p>Take any workshop and clinic or more in present year</p>
                <p>Begin to take Gakushu classes(6)</p>
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
                        <td>Body change #1 with partner (2 kinds)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>
                
                    <tr>
                        <th>Basic Breakfalls</th>   
                    </tr>
                    <tr>
                        <td>Forward roll #1, #2 (both hands on mat)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Weapons Techniques</th>   
                    </tr>
                    <tr>
                        <td>Bokken: Solo 5 stances:</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>(Chudan/Gedan/Jyodan/Hasso/Waki)</td>
                    </tr>
                    <tr>
                        <td>Tanto: Solo #2</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr><td></td></tr>

                    <tr>
                        <th>Techniques</th>
                    </tr>
                    <tr>
                        <td>One hand grasp Side step-in throw #1(A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>One hand grasp Side step-in throw #2 (G)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Both hands grasp Hitting elbow breath throw #1 (A)</td>
                        <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Both hands grasp Hitting elbow breath throw #2 (G)</td>
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
                    <tr>One hand grasp 2nd control pin #2 (G)</tr>
                </table>
            </form>
        </div>
     );
}
 
export default SixthKyu;