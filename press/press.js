const PressModel = require("./press.model");
const fs = require("fs");
const path = require("path");

async function getPress(req, res) {
  try {
    const press = await PressModel.find({});
    return res.status(200).send(press);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}

async function addPress(req, res) {
  try {
    // let image =req.file.originalname
    // let userId=req.params.id

    const category = new PressModel({
      userId: req.body.userId,
      title: req.body.title,
      genre: req.body.genre,
      tags: req.body.tags,
      theme: req.body.theme,
      text: req.body.text,
      view: req.body.view,
      commit: req.body.commit,
    });

    category.save((err, category) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          errors: err.meesage,
        });
      }
      return res.json({
        message: "Created category successfully",
        category,
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

// async function updatePupils(req,res) {
//     try{
//         let userId=req.params.id
//         let del= await PupilsModel.findOne({userId})

//         // console.log(del.imagePath);

//         fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {
//             if (err) {
//                 console.error(err);
//             }
//            console.log('File has been Deleted');
//         });
//         let image =req.file.originalname
//         let category = ({

//             name:req.body.name,
//             surName:req.body.surName,
//             address:req.body.address,
//             parentsPhoneNumber:req.body.parentsPhoneNumber,
//             birth:req.body.birth,
//             paymet:req.body.paymet,
//             group: req.body.group,
//             imagePath: image,
//             subject:req.body.subject
//         })
//         let result=await PupilsModel.findByIdAndUpdate(userId,category)

//         return res.status(200).send(result)
//     }catch(err){
//         res.status(404).send(err)
//     }
// }

async function deletePress(req, res) {
  try {
    let userId = req.params.id;
    let del = await PressModel.findOne({ _id: userId });

    let result = await PressModel.findByIdAndDelete(userId);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // to`lov uchun
// async function payPupils(req,res){
//     try{
//         let userId=req.params.id
//         let pay= await PupilsModel.findOne({_id:userId})
//         console.log(userId);
//         console.log(pay);
//         // push qilish
//         if(req.body.month) {
//             pay.paymet.push(req.body)
//         }
//         pay.save()
//         return res.status(200).send(pay)
//     }catch(err){
//         res.status(404).send(err)
//         console.log(err);
//     }
// }

module.exports = {
  getPress,
  addPress,
  // updatePupils,
  deletePress,
  // payPupils
};
