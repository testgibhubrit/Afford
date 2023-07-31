import { useEffect, useState } from "react";
import { db } from "../firebase-config.js";
import { collection,getDocs, doc } from "firebase/firestore";

function HomeComponent() {

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getSchedule();
    }, []);

    const getSchedule = async () => {
        const querySnapshot = await getDocs(collection(db, "schedule"));
        setSchedule(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }


    return (
        <div>
            <div className="container">
                <div className="row" >
                    <h3>Train Schedule</h3>
                    <h3>Train Schedule</h3>
                    <br></br>
                    <br></br>

                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="thead-dark">
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
            </div>
        </div>
    );
}

export default HomeComponent;