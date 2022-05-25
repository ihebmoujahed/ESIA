import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/70734131_10213174232585356_1106803842294480896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gyqjA4YgF2oAX-MMf4-&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8HwhmvYiO7e1d7zpgHu73QqRZ21yZmIjfpvi8s0b-tgQ&oe=62B1BB7C" alt="Stickman" width="1524" height="1539" />
        <MoreVertIcon fontSize="small" />
      </div>
      
    </div>
  );
};

export default Featured;
