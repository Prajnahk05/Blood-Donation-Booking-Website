import Navbar from "../component/Navbar";
import Image from "../component/assets/Donation.jpg";


function Donation(){
    return(
        <>
    <div className="c1">
    <br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 className="c2">Blood and Its Components</h1><br></br>
        <h2 className="c5">Whole Blood and Red Blood Cells</h2><br></br>
        <img src={Image} alt="Donation Img" className="c3"/><br></br><br></br>
        <p className="c5">• Red Blood Cells (RBCs) are perhaps the most recognizable component of whole blood.</p><br></br>
        <p className="c5">• RBCs contain hemoglobin, a complex protein containing iron that carries oxygen through the body. The percentage of blood volume composed of red blood cells is called the “Hematocrit.” There are about one billion red blood cells in two to three drops of blood, and for every 600 red blood cells, there are about 40 Platelets and one white cell.</p><br></br>
        <p className="c5">• Manufactured in the bone marrow, RBCs are continuously produced and broken down. They live for about 120 days in the circulatory system. Red blood cells are prepared from whole blood by removing plasma, or the liquid portion of the blood, and they are used to treat anemia while minimizing an increase in blood volume. RBCs may be treated and frozen for an extended storage, of 10 years or more.</p><br></br>
        <h2 className="c5">Granulocytes</h2><br></br>
        <p className="c5">• Granulocytes are one type of several types of white blood cells that are in fact used in more specialized transfusion therapy. Granulocytes and monocytes protect against infection by surrounding and destroying invading bacteria and viruses, and lymphocytes aid in the immune defense system. Granulocytes are prepared by an automated process called Apheresis, and must be transfused within 24 hours after collection. They are used for infections that are unresponsive to antibiotic therapy.</p>
        <br></br><hr></hr>
        <h2 className="h2">Types of Donation</h2><br></br>
        <p className="h3">The human body contains five liters of blood, which is made of several useful components i.e. Whole blood, Platelet, and Plasma.</p><br></br>

<p className="h4">Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.</p><br></br>

<p className="h5">For plasma and platelet donation you must have donated whole blood in past two years.</p>


    <br></br><hr></hr><br></br>

    
    
    <div>
        <h3 className="h2">Whole Blood:</h3><br></br>

        <div className="h7">
       <div className="box1">
        <h4>What is it?</h4>
<p>Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
<br></br>
<h4>Who can donate?</h4>
<p>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
</div>

<div className="box1">
<h4>User For?</h4>
<p>Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.</p><br></br>
<h4>Lasts For?</h4>
<p>Red cells can be stored for 42 days.</p>
</div>

<div className="box1">
    <h4>How long does it take?</h4>
<p>15 minutes to donate.</p><br></br>

<h4>How often can I donate?</h4>
<p>Every 12 weeks</p>
</div>
</div>
</div>
<br></br>

<div>
<h3 className="h2">Plasma:</h3><br></br>
    
        <div className="h7">
            <div className="box1">
            <h4>What is it?</h4>
            <p>The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.</p>
        <br></br>
        <h4>Who can donate?</h4>
        <p>You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful whole blood donation in last two years.</p>
        </div>

        <div className="box1">
            <h4>User For?</h4>
            <p>Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia, immunisations.</p>
       <br></br>
       <h4>Lasts For?</h4>
       <p>Plasma can last up to one year when frozen.</p>
       </div>

       <div className="box1">
        <h4>How does it work?</h4>
        <p>We collect your blood, keep plasma and return rest to you by apheresis donation.</p>
        <br></br>
        <h4>How long does it take?</h4>
        <p>15 minutes to donate.</p>
        <br></br>
        <h4>How often can I donate?</h4>
        <p>Every 2-3 weeks.</p>
       </div>
</div>
</div><br></br>

<div>
    <h3 className="h2">Platelet:</h3><br></br>

    <div className="h7">
        <div className="box1">
            <h4>What is it?</h4>
            <p>The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like malaria and cancer patients.</p>
        <br></br>
        <h4>Who can donate?</h4>
        <p>You need to be 18-70 years old (men), weigh 50kg or more and have given a successful plasma donation in the past 12 months</p>
        </div>

        <div className="box1">
            <h4>User For?</h4>
            <p>Cancer, blood diseases, haemophilia, anaemia, heart disease, stomach disease, kidney disease, childbirth, operations, blood loss, trauma, burns.</p>
        <br></br>
        <h4>Lasts For?</h4>
        <p>Just five days..</p>
        </div>

        <div className="box1">
            <h4>How does it work?</h4>
            <p>We collect your blood, keep platelet and return rest to you by apheresis donation.</p>
            <br></br>
            <h4>How long does it take?</h4>
            <p>45 minutes to donate.</p>
            <br></br>
            <h4>How often can I donate?</h4>
            <p>Every 2 weeks</p>
        </div>
    </div>
    <br></br>
    <br></br>

</div>
</div>
    

    
    <Navbar/>

        </>
    )
    }
    
    export default Donation;
    

