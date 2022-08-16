import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../../assets/css/table.css";

function ThirdPart() {
  const [thirdData, setThirddata] = useState([]);
  const getThirddata = async () => {
    const response = await axios("http://localhost:3000/thirdpart");
    setThirddata(response.data);
  };
  useEffect(() => {
    getThirddata();
  }, []);

  return (
    <div className="tables">
      <h3>Part - III : Attendence </h3>
      <Table
        striped
        bordered
        hover
        className="table-responsive border-bottom border-dark"
      >
        <thead>
          <tr>
            <th> </th>
            <th>No. of working days</th>
            <th>No. of Days Present</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
        {thirdData.map((e) => (
          <tr>
            <td className="text-uppercase"> {e.term}</td>
            <td>{e.workingDays}</td>
            <td>{e.presentDays}</td>
            <td>{e.percentage}</td>
          </tr>
           ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ThirdPart;
// {
// 	"firstPart": [
// 		{
//             "id": 1,
//             "subject": "English",
//             "fa": "50",
//             "fmarks": "60",
//             "sa": "31",
//             "smarks": "40",
//             "total": "70"
//           },
//           {
//             "id": 2,
//             "subject": "Hindi",
//             "fa": "35",
//             "fmarks": "40",
//             "sa": "59",
//             "smarks": "60",
//             "total": "70"
//           },
//           {
//             "id": 3,
//             "subject": "Sanskrit",
//             "fa": "55",
//             "fmarks": "60",
//             "sa": "39",
//             "smarks": "40",
//             "total": "70"
//           },
//           {
//             "id": 4,
//             "subject": "Math",
//             "fa": "38",
//             "fmarks": "40",
//             "sa": "58",
//             "smarks": "60",
//             "total": "90"
//           },
//           {
//             "id": 5,
//             "subject": "EVS",
//             "fa": "28",
//             "fmarks": "30",
//             "sa": "67",
//             "smarks": "70",
//             "total": "95"
//           },
//           {
//             "id": 6,
//             "subject": "Social Study",
//             "fa": "45",
//             "fmarks": "50",
//             "sa": "49",
//             "smarks": "50",
//             "total": "94"
//           },
//           {
//             "id": 7,
//             "subject": "Computer",
//             "fa": "30",
//             "fmarks": "29",
//             "sa": "66",
//             "smarks": "70",
//             "total": "92"
//           },
//           {
//             "id": 8,
//             "subject": "Moral",
//             "fa": "47",
//             "fmarks": "50",
//             "sa": "46",
//             "smarks": "50",
//             "total": "100"
//           },
//           {
//             "id": 9,
//             "subject": "G.K.",
//             "fa": "15",
//             "fmarks": "20",
//             "sa": "77",
//             "smarks": "80",
//             "total": "93"
//           },
//           {
//             "id": 10,
//             "subject": "Conversation",
//             "fa": "66",
//             "fmarks": "70",
//             "sa": "28",
//             "smarks": "30",
//             "total": "96"
//           },
//           {
//             "id": 11,
//             "subject": "Drawing",
//             "fa": "39",
//             "fmarks": "40",
//             "sa": "65",
//             "smarks": "70",
//             "total": "98"
//           }
// 	],
// 	"secondPart": [
// 		{
//             "id": 1,
//             "subject": "Development & Maturity",
//             "grade": "A+"
//           },
//           {
//             "id": 2,
//             "subject": "Responsibility",
//             "grade": "A"
//           },
//           {
//             "id": 3,
//             "subject": "Self Confidence",
//             "grade": "A+"
//           },
//           {
//             "id": 4,
//             "subject": "Participation in Group Work",
//             "grade": "A"
//           },
//           {
//             "id": 5,
//             "subject": "Neatness",
//             "grade": "A+"
//           },
//           {
//             "id": 6,
//             "subject": "Music",
//             "grade": "A"
//           },
//           {
//             "id": 7,
//             "subject": "Discipline",
//             "grade": "A"
//           },
//           {
//             "id": 8,
//             "subject": "Hand Work",
//             "grade": "A+"
//           },
//           {
//             "id": 9,
//             "subject": "Attitude towards home work",
//             "grade": "A"
//           },
//           {
//             "id": 10,
//             "subject": "Craft",
//             "grade": "A+"
//           },
//           {
//             "id": 11,
//             "subject": "Regularity and punctuality",
//             "grade": "A"
//           }
// 	],
// 	"thirdPart": [
// 		{
// 			"id": 1,
// 			"term": "Term-I",
// 			"working_days": "83",
// 			"present_days": "83",
// 			"percentage": "100"
// 		}
// 	],
// 	"grading": [
// 		{
// 			"id": 1,
// 			"range": "91-100",
// 			"grade": "A1",
// 			"remarks": "Excellent"
// 		},
// 		{
// 			"id": 2,
// 			"range": "81-90",
// 			"grade": "A2",
// 			"remarks": "Very Good"
// 		},
// 		{
// 			"id": 3,
// 			"range": "71-80",
// 			"grade": "B1",
// 			"remarks": "Good"
// 		},
// 		{
// 			"id": 4,
// 			"range": "61-70",
// 			"grade": "B2",
// 			"remarks": "Satisfactory"
// 		},
// 		{
// 			"id": 5,
// 			"range": "51-60",
// 			"grade": "C1",
// 			"remarks": "Satisfactory"
// 		},
// 		{
// 			"id": 6,
// 			"range": "40-50",
// 			"grade": "C2",
// 			"remarks": "Satisfactory"
// 		},
// 		{
// 			"id": 7,
// 			"range": "Below 40",
// 			"grade": "D",
// 			"remarks": "Fail:Poor"
// 		}
// 	]
// }
