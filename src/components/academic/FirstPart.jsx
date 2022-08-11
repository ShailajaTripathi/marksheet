import React from "react";
import Table from "react-bootstrap/Table";
import "./styles/firstPart.css";
import '../../assets/css/table.css';
function FirstPart() {
  return (
    <div>
      <h3 className="text-primary">
        <span className="square border border-bottom-0 partTitle">
          Part - I : Scholastic Areas
        </span>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tableHead" rowspan={2}>
              S.No
            </th>
            <th className="tableHead text-uppercase" rowspan={2}>
              Subjects
            </th>
            <th>FA</th>
            <th>Total</th>
            <th>SA</th>
            <th>Total</th>
            <th>Overall Marks</th>
          </tr>
          <tr>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">70</td>
            <td className="border-top fw-bold">90</td>
            <td className="border-top fw-bold">100</td>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td>01</td>
            <td>English</td>
            <td>18</td>
            <td>66</td>
            <td>78</td>
            <td>60</td>
            <td className="text-center">70</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Hindi</td>
            <td>15</td>
            <td>23</td>
            <td>70</td>
            <td>40</td>
            <td className="text-center">89</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Sanskrit</td>
            <td>60</td>
            <td>60</td>
            <td>30</td>
            <td>45</td>
            <td className="text-center">70</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Math</td>
            <td>30</td>
            <td>18</td>
            <td>20</td>
            <td>60</td>
            <td className="text-center">98</td>
          </tr>
          <tr>
            <td>05</td>
            <td>EVS</td>
            <td>15</td>
            <td>23</td>
            <td>70</td>
            <td>40</td>
            <td className="text-center">80</td>
          </tr>
          <tr>
            <td>06</td>
            <td>Social Study</td>
            <td>18</td>
            <td>66</td>
            <td>78</td>
            <td>60</td>
            <td className="text-center">95</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Computer</td>
            <td>18</td>
            <td>66</td>
            <td>78</td>
            <td>60</td>
            <td className="text-center">99</td>
          </tr>
          <tr>
            <td>08</td>
            <td>Moral</td>
            <td>60</td>
            <td>60</td>
            <td>30</td>
            <td>45</td>
            <td className="text-center">93</td>
          </tr>
          <tr>
            <td>09</td>
            <td>G.K.</td>
            <td>15</td>
            <td>23</td>
            <td>70</td>
            <td>40</td>
            <td className="text-center">87</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Conversation</td>
            <td>30</td>
            <td>18</td>
            <td>20</td>
            <td>60</td>
            <td className="text-center">97</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Drawing</td>
            <td>15</td>
            <td>23</td>
            <td>70</td>
            <td>40</td>
            <td className="text-center">80</td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold text-uppercase">
              Grand Total
            </td>
            <td colSpan={5} className="text-right">
              485
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold text-uppercase">
              Percentage
            </td>
            <td colSpan={5} className="text-right ">
              80.8
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="fw-bold text-uppercase">
              Rank
            </td>
            <td colSpan={5} className="text-right">
              V
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FirstPart;
