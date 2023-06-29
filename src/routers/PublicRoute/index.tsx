import React from "react";

interface Props {
    page:React.ReactNode
}

const PublicRoute:React.FC<Props> = ({page}) => {

    return(
        <div>{page}</div>
    )
}

export default PublicRoute;