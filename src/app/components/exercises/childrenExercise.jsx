import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const WrapperComponents = ({ children }) => {
    let i = 0;
    return React.Children.map(children, (child) => {
        i = i + 1;
        const config = {
            ...child.props,
            value: i
        };
        return React.cloneElement(child, config);
    });
};
WrapperComponents.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <WrapperComponents>
                <Component/>
                <Component/>
                <Component/>
            </WrapperComponents>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value} Компонент списка</div>;
};
Component.propTypes = {
    value: PropTypes.number
};
export default ChildrenExercise;
