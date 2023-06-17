import React from 'react'
import Image from "../component/assets/MOHL.jpg";
import AImage from "../component/assets/MOHL1.jpg";

const MOHL = () => {
    return (
        <div className='d4'>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h1 className='c2'>Maintenance of Hemoglobin Level</h1><br></br>
            <h2 className='c5'>Hemoglobin</h2><br></br>
            <p className='c5'>Hemoglobin is a protein found in your red blood cells. It gives the blood its red color and is responsible for carrying oxygen to the tissues throughout your body. The Medical Laboratory Technicians checks your hemoglobin level before each blood donation to protect Donor health.</p>
            <br></br>
            <img src={Image} alt="MOHL Img" className='e1'/><br></br>
            <h2 className='c5'>Normal hemoglobin levels in healthy adults</h2><br></br>
            <p className='c5'>Hemoglobin values in healthy people usually fall within the following ranges:</p><br></br>
            <p className='c5'>Men: 13–16 g/dl  & Women: 11–14 g/dl.</p><br></br>
            <h2 className='c5'>Maintain of Hemoglobin Level</h2><br></br>
            <p className='e2'>• It is normal for hemoglobin level to fluctuate. There are some things one can do to boost the hemoglobin level:</p><br></br>
            <p className='e2'>• Eat a healthy, well-balanced diet containing foods high in vitamin C and rich in iron.</p><br></br>
            <h2 className='c5'>Measures to take care low Hemoglobin Level</h2><br></br>
            <p className='e2'>• If one were to be Deffered due to low hemoglobin levels, there may be steps one should take before they try to donate again. One should eat a healthy, well-balanced diet containing foods high in vitamin C and rich in iron.</p><br></br>
            <p className='e2'>• If the hemoglobin level was below normal levels, or if have been Deferred on several occasions, we recommend that they discuss with your health-care provider.</p><br></br>
            <p className='e2'>• Donating blood removes iron from the body. Body needs iron to make new red blood cells. Low levels of iron can cause anemia or make it worse.</p><br></br>
            <p className='e2'>• All blood Donors should learn more about iron and hemoglobin.</p><br></br>
            <p className='e2'>• Everyone should eat a nutritious, well-balanced diet.</p><br></br>
            <p className='e2'>• All blood Donors should add foods rich in iron and high in vitamin C to their diet.</p><br></br>
            <h2 className='c5'>Iron-Rich Foods</h2><br></br>
            <h3 className='c5'>The amount and type of iron in the diet is important. Some iron-rich foods are:</h3><br></br>
            <img src={AImage} alt="MOHL1 Img" className='e3'/><br></br><br></br>
            <div className='c7'>
                <ul className='e4'>
                    <li><strong>Fruits </strong></li>
                    <li>Strawberries</li>
                    <li>Watermelon</li>
                    <li>Raisins</li>
                    <li>Dates</li>
                    <li>Figs</li>
                    <li>Prunes</li>
                    <li>Prune Juice</li>
                    <li>Dried apricots</li>
                    <li>Dried peaches</li>
                </ul>
                <ul className='e4'>
                <li><strong>Vegetables</strong></li>
                <li>Spinach</li>
                <li>Sweet Potatoes</li>
                <li>Peas</li>
                <li>Broccoli</li>
                <li>String beans</li>
                <li>Beet greens</li>
                <li>Dandelion greens</li>
                <li>Collards</li>
                <li>Kale</li>
                <li>Chard</li>
                </ul>
                <ul className='e4'>
                <li><strong>Beans & Other Foods</strong></li>
                <li>Tofu</li>
                <li>Beans (kidney, garbanzo, or white, canned)</li>
                <li>Tomato products (e.g., paste)</li>
                <li>Dried peas</li>
                <li>Dried beans</li>
                <li>Lentils</li>
                <li>Instant breakfast</li>
                <li>Corn syrup</li>
                <li>Maple syrup</li>
                <li>Molasses</li>
            </ul>
            </div><br></br><br></br>
        </div>
    )
}

export default MOHL
