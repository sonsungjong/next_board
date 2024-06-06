export default function reqApiDate(req, res){
    let datetime = new Date();
    return res.status(200).json(datetime);
}