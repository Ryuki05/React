export const ColorText = (props) => {
    const contentStyle = {
        color: props.color,
    };

    console.log(props)

    return (
        <div>
            <h1 style={contentStyle}>{props.message}</h1>
        </div>
    );
};
