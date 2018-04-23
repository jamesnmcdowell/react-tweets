let Screen = connect (
    (state) => {
        return { sups: state.sups}
    },
    (dispatch) => {
        return { dispatch: dispatch }
    }
)(ScreenDumb)

let mapStateToProps = (state) => {
    return {sups:state.sups};
};

let mapDispatchToProps = (state) => {
    return { dispatch: dispatch };
};

let Screen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenDumb)