import './index.less';
import { Button } from "antd";

const Select = () => {
    return (
        <div className="select">
            <div><Button >推荐</Button></div>
            <div><Button >排行版</Button></div>
            <div><Button >歌单</Button></div>
            <div><Button >主播电台</Button></div>
            <div><Button >歌手</Button></div>
            <div><Button >新碟上架</Button></div>
        </div>
    );
}

export default Select;