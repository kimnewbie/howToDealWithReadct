import { Component } from "react";
import ColorContext, { ColorConsumer } from "./color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <ColorConsumer>
                    {
                        ({ actions }) => (
                            <div style={{ display: 'flex' }}>
                                {
                                    colors.map(color => (
                                        <div
                                            key={color}
                                            style={{
                                                background: color,
                                                width: '24px',
                                                height: '24px',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => this.handleSetColor(color)}
                                            onContextMenu={e => {
                                                e.preventDefault(); // 메뉴나오는 거 방지
                                                this.handleSetSubcolor(color);
                                            }}
                                        />
                                    ))}
                            </div>
                        )
                    }
                </ColorConsumer>
                <hr />
            </div >
        );
    }
};

export default SelectColors;