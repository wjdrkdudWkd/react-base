const Container = ({ children }) => {
    const syl = { margin: 20, padding: 20, border: "1px solid" }
    return <div style={syl}>{children}</div>;
}

export default Container;