const express=require("express")
const router=express.Router();
const ItemMod=require("../db/ItemsDB")

router.post("/add",async (req,res)=>{
    var img=req.files.image;
    img.mv("./public/itemImage/"+img.name,async (err)=>{
        if(err){
            throw err;
        }else{
            var objins={
            name:req.body.name,
            contact:req.body.contact,
            itemName:req.body.itemName,
            date:req.body.date,
            location:req.body.location,
            image:img.name,
            desc:req.body.desc
            }
            await ItemMod.create(objins);
            res.json({msg:"Item Reported"})
        }
    })
});


router.get("/show", async (req, res) => {
  try {
    const items = await ItemMod.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const fs = require("fs");
const path = require("path");

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    //Find the item to get the image filename
    const item = await ItemMod.findById(id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    //Delete the image file from the server
    const imagePath = path.join(__dirname, "../public/itemImage", item.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.warn("Image file could not be deleted:", err.message);
      }
    });

    //Delete item from DB
    await ItemMod.findByIdAndDelete(id);

    res.json({ msg: "Item and image deleted successfully" });
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ error: err.message });
  }
});


module.exports=router;