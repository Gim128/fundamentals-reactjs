function Main(props){
    return(
        <div>
            <h3>Thi is Main</h3>
            <ul>
                <li>node</li>
                <li>react</li>
                <li>java</li>
                <li>native</li>
            </ul>

            {props.children}

        </div>
    )
}

export default Main;