import { useEffect, useState } from "react";
import { db } from "../../firebase-config.js";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

function HomeComponent() {

    const [no,setNo] = useState('');
    const [departs, setDeparts] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [duration, setDuration] = useState('');
    
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getSchedule();
    }, []);

    const addSchedule = async () => {
        const docRef = await addDoc(collection(db, "schedule"), {
            Number : no,
            Departs: departs,
            From: from,
            To: to,
            Duration: duration,
            
        }).then(() => {
            alert("Record Successfully Added !");
        
            clearTexts();
        }).catch(() => {
            alert("Record Adding Failed !")
        });
    }

    //let deleteValue = document.getElementById("deleteinput").value;

    const deleteSchedule = async () => {
        await deleteDoc(doc(db, "schedule", no)) // last point - object id
            .then(() => {
                alert("Record Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }




    // To update
    const updateSchedule = async () => {
        const docRef = await updateDoc(collection(db, "schedule" , no), {
            Number : no,
            Departs: departs,
            From: from,
            To: to,
            Duration: duration,
            
        }).then(() => {
            alert("Record Successfully Updated !");
        
            clearTexts();
        }).catch(() => {
            alert("Record Updating Failed !")
        });
    }
    
    //to get data
    const getSchedule = async () => {
        const querySnapshot = await getDocs(collection(db, "schedule"));
        setSchedule(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    //clear texr field

    const clearTexts = () => {
        setNo('');
        setDeparts('');
        setFrom('');
        setTo('');
        setDuration('');
        
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3>Train Schedule admin panel</h3>
                    <br></br>
                    <br></br>

                </div>
                <div className="row">
                        <div className="col">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">No</label>
                            <input type="email" value={no} onChange={(e) => { setNo(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="NXXX" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Departs</label>
                            <input type="email" value={departs} onChange={(e) => { setDeparts(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="10.45" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">From</label>
                            <input type="email" value={from} onChange={(e) => { setFrom(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="colombo" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">To</label>
                            <input type="email" value={to} onChange={(e) => { setTo(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="matara" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Duration</label>
                            <input type="email" value={duration} onChange={(e) => { setDuration(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="2h" />
                        </div>
                        
                        <button type="button" class="btn btn-primary" onClick={addSchedule}>Save</button>
                        
                        <button type="button" class="btn btn-danger" style={{ marginLeft: 10 }} onClick={updateSchedule}>Update</button>
                    </div>
                    <div className="col">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Departs</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schedule.map(schedule => {
                                        return (
                                            <tr>
                                                <td>{schedule.Number}</td>
                                                <td>{schedule.Departs}</td>
                                                <td>{schedule.From}</td>
                                                <td>{schedule.To}</td>
                                                <td>{schedule.Duration}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            
                        </table>
                    </div>
                </div>
                <div className="row">
                            <div className="col-6"> 

                            <label for="exampleFormControlInput1" class="form-label">Enter the No to Delete Record</label>
                            <input type="email" value={no} onChange={(e) => { setNo(e.target.value) }} class="form-control" id="deletinput" placeholder="Nxxx" />
                            <br></br>
                            <button type="button" class="btn btn-danger" style={{ marginLeft: 10 }} onClick={deleteSchedule}>Delete</button>
                            
                            </div>

                            </div>
            </div>
        </div>
    );
}

export default HomeComponent;