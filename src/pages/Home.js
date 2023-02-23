import withWidget from "../widget-framework/hoc/withWidget";

function Home() {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(50vh - 56px)'}}>
        <div>
            <h1>This is the homepage</h1></div>
    </div>;
}

export default withWidget(Home);
