let rollNums = {
    10501: "Ubaid", 10502: "Usaid", 10503: "Umair", 10504: "Hasnain", 10505: "Mubeen"
};
let dropDown = document.getElementById('rollNum')
dropDown.addEventListener("change", function () {
    let selected = dropDown.value
    let outputElement = document.getElementById("info");


    switch (selected) {
        case "10501":
            outputElement.style.display = "block"
            outputElement.innerHTML = ` 
<h1>Result of Ubaid</h1>
<table>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Math</td>
            <td>85</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Computer</td>
            <td>92</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>English</td>
            <td>76</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>65</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Science</td>
            <td>40</td>
            <td class="fail">Fail</td>
        </tr>
    </tbody>
</table>
</div>`;
            break;
        case "10502":
            outputElement.style.display = "block";
            outputElement.innerHTML = `
    <h1>Result of Owais</h1>
    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Math</td>
                <td>78</td>
                <td class="pass">Pass</td>
            </tr>
            <tr>
                <td>Computer</td>
                <td>88</td>
                <td class="pass">Pass</td>
            </tr>
        <tr>
            <td>English</td>
            <td>70</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>59</td>
            <td class="pass">Pass</td>
        </tr>
            <tr>
                <td>Science</td>
                <td>45</td>
                <td class="fail">Fail</td>
            </tr>
        </tbody>
    </table>`;
            break;

        case "10503":
            outputElement.style.display = "block";
            outputElement.innerHTML = `
    <h1>Result of Umair</h1>
    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Math</td>
                <td>90</td>
                <td class="pass">Pass</td>
            </tr>
            <tr>
                <td>Computer</td>
                <td>94</td>
                <td class="pass">Pass</td>
            </tr>
        <tr>
            <td>English</td>
            <td>60</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>63</td>
            <td class="pass">Pass</td>
        </tr>
            <tr>
                <td>Science</td>
                <td>70</td>
                <td class="pass">Pass</td>
            </tr>
        </tbody>
    </table>`;
            break;

        case "10504":
            outputElement.style.display = "block";
            outputElement.innerHTML = `
    <h1>Result of Hassan</h1>
    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Math</td>
                <td>80</td>
                <td class="pass">Pass</td>
            </tr>
            <tr>
                <td>Computer</td>
                <td>70</td>
                <td class="pass">Pass</td>
            </tr>
        <tr>
            <td>English</td>
            <td>58</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>74</td>
            <td class="pass">Pass</td>
        </tr>
            <tr>
                <td>Science</td>
                <td>50</td>
                <td class="fail">Fail</td>
            </tr>
        </tbody>
    </table>`;
            break;

        case "10505":
            outputElement.style.display = "block";
            outputElement.innerHTML = `
    <h1>Result of Mubeen</h1>
    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Math</td>
                <td>95</td>
                <td class="pass">Pass</td>
            </tr>
            <tr>
                <td>Computer</td>
                <td>88</td>
                <td class="pass">Pass</td>
            </tr>
        <tr>
            <td>English</td>
            <td>62</td>
            <td class="pass">Pass</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>73</td>
            <td class="pass">Pass</td>
        </tr>
            <tr>
                <td>Science</td>
                <td>75</td>
                <td class="pass">Pass</td>
            </tr>
        </tbody>
    </table>`;
            break;

        default:
            outputElement.style.display = "block";
            outputElement = `<p>Roll number not found</p>`
            break;
    }
})
