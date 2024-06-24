const msg = (message, color) => {
    console.log([color](message));
};


export const success = (req, res, status=200, mensaje="") => {
    res.status(status).send({
        error:false,
        status:status,
        body: mensaje
    }); 
    
};
export const error = (req, res, status=500, mensaje="") => {
    if (!res.headersSent) {
        res.status(status).send({
            error:true,
            status:status,
            body: mensaje
        }); 
        
    }
};




export default msg;
