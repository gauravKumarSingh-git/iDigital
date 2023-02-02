import Booklist from "./booklist.json";
import Table from "ract-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Lab4 = () => {
  const [data, setData] = useState(Booklist);
  const search = (category) => {
    let s;
    if (category === "id") {
      s = document.getElementById("ID").value;
      let d1 = Booklist.filter((d) => {
        if (d.BookID == s || s == "") return d;
      });
      let d2 = [];
      d2.push(d1);
      setData(...d2);
    }
    if (category === "title") {
      s = document.getElementById("Title").value.toLowerCase();
      let d1 = Booklist.filter((d) => {
        let x = d.BookTitle.toLocaleLowerCase();
        if (x.includes(s)) return d;
      });
      let d2 = [];
      d2.push(d1);
      setData(...d2);
    }

    if (category === "author") {
      s = document.getElementById("Author").value.toLowerCase();
      let d1 = Booklist.filter((d) => {
        let x = d.BookAuthor.toLocaleLowerCase();
        if (x.includes(s)) return d;
      });
      let d2 = [];
      d2.push(d1);
      setData(...d2);
    }
    if (category === "year") {
      s = document.getElementById("Year").value;
      let d1 = Booklist.filter((d) => {
        if (d.BookYear == s || s == "") return d;
      });
      let d2 = [];
      d2.push(d1);
      setData(...d2);
    }
  };
  return (
    <div>
      <Table striped bordered hover size="sm" style={{ color: "grey" }}>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Year of Publish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                onChange={() => search("id")}
                id="ID"
                type="text"
                placeholder="Id"
              />
            </td>
            <td>
              <Form.Control
                onChange={() => search("title")}
                id="Title"
                type="text"
                placeholder="Title"
              />
            </td>
            <td>
              <Form.Control
                onChange={() => search("author")}
                id="Author"
                type="text"
                placeholder="Author"
              />
            </td>
            <td>
              <Form.Control
                onChange={() => search("year")}
                id="Year"
                type="text"
                placeholder="Year"
              />
            </td>
          </tr>
          {data.map((data) => {
            return (
              <tr>
                <td style={{ color: "grey" }}>{data.BookID}</td>
                <td style={{ color: "grey" }}>{data.BookTitle}</td>
                <td style={{ color: "grey" }}>{data.BookAuthor}</td>
                <td style={{ color: "grey" }}>{data.BookYear}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Lab4;
