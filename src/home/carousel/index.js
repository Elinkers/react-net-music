import './index.less';
import { Carousel } from 'antd';
import { useRef } from 'react';

const Carousels = () => {
    const cal = useRef();
    
    const next = () => {
        cal.current.next();
    }
    const prev = () => {
        cal.current.prev();
    }

    return (
        <div className="cal">

            <div className="lt">
                <div onClick={prev}>&lt;</div>
            </div>
            <Carousel
                autoplay="true"
                ref={cal}
                effect="fade"
                style={{ maxWidth: "1200px" }}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
                <div>
                    <h3>10</h3>
                </div>
            </Carousel>
            <div className="gt">
                <div onClick={next}>&gt;</div>
            </div>

        </div>
    );
}

export default Carousels;