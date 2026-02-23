localStorage.removeItem("items");

const defaultItems = [
{name:"Ape Pirate",price:99,img:"ape_pirate.png"},
{name:"Archer's Tribe",price:99,img:"archers_tribe.png"},
{name:"Arrows",price:69,img:"arrows.png"},
{name:"Fortify",price:69,img:"fortify.png"},
{name:"Warrior",price:89,img:"warrior.png"},
{name:"Fan Dancer",price:89,img:"fan_dancer.png"},
{name:"Giant Growth",price:109,img:"giant_growth.png"},
{name:"Golem",price:111,img:"golem.png"},
{name:"Skeletons Swarm",price:89,img:"skeletons_swarm.png"},
{name:"Skeletons",price:49,img:"skeletons.png"},
{name:"Nature Heal",price:49,img:"nature_heal.png"},
{name:"Poison",price:59,img:"poison.png"},
{name:"Bomb",price:49,img:"bomb.png"},
{name:"Skeletons Legion",price:119,img:"skeletons_legion.png"},
{name:"Triplets",price:119,img:"triplets.png"},
{name:"Executioner",price:159,img:"executioner.png"},
{name:"Blizzard",price:99,img:"blizzard.png"},
{name:"Cannon Shot",price:111,img:"cannon_shot.png"},
{name:"Catapult",price:159,img:"catapult.png"},
{name:"Dryad",price:159,img:"dryad.png"},
{name:"Meteor",price:119,img:"meteor.png"},
{name:"Inferno",price:119,img:"inferno.png"},
{name:"Gust of Wind",price:119,img:"gust_of_wind.png"},
{name:"Ice Golem",price:169,img:"ice_golem.png"},
{name:"Rage",price:99,img:"rage.png"},
{name:"Magician",price:119,img:"magician.png"},
{name:"Mud Elemental",price:199,img:"mud_elemental.png"},
{name:"Orc Warrior",price:119,img:"orc_warrior.png"},
{name:"Orcs Horde",price:239,img:"orcs_horde.png"},
{name:"Stone Statue",price:119,img:"stone_statue.png"},
{name:"Spiked Statue",price:199,img:"spiked_statue.png"},
{name:"Siege Ballista",price:119,img:"siege_ballista.png"},
{name:"Lightning",price:159,img:"lightning.png"},
{name:"Hollow Knight",price:399,img:"hollow_knight.png"},
{name:"Shaman",price:399,img:"shaman.png"},
{name:"Archer Queen",price:399,img:"archer_queen.png"},
{name:"Angel",price:249,img:"angel.png"},
{name:"Demon",price:199,img:"demon.png"},
{name:"Fire Elemental",price:299,img:"fire_elemental.png"},
{name:"Genie Lamp",price:169,img:"genie_lamp.png"},
{name:"Mage",price:2699,img:"mage.png"},
{name:"Mana Ritual",price:219,img:"mana_ritual.png"},
{name:"Black Knight",price:249,img:"black_knight.png"},
{name:"Metamorph",price:249,img:"metamorph.png"},
{name:"Skull King",price:249,img:"skull_king.png"},
{name:"Spectre",price:399,img:"spectre.png"},
{name:"Reaper",price:249,img:"reaper.png"},
{name:"Resurrection",price:159,img:"resurrection.png"},
{name:"Shock",price:159,img:"shock.png"},
{name:"Standard Bearer",price:169,img:"standard_bearer.png"},
{name:"Unchained Demon",price:4199,img:"unchained_demon.png"},
{name:"Wraith",price:199,img:"wraith.png"},
{name:"Dragon",price:4499,img:"dragon.png"},
{name:"Storm Elemental",price:2649,img:"storm_elemental.png"},
{name:"Skull Queen",price:2699,img:"skull_queen.png"},
{name:"Phoenix",price:2899,img:"phoenix.png"},
{name:"Black Witch",price:2649,img:"black_witch.png"},
{name:"Necromancer",price:2649,img:"necromancer.png"}
];

localStorage.setItem("items",JSON.stringify(defaultItems));

let items = JSON.parse(localStorage.getItem("items"));
let wa = localStorage.getItem("wa") || "919630785110";
let selectedItem="";

function renderUser(){
const box=document.getElementById("items");
if(!box) return;
box.innerHTML="";
items.forEach((i)=>{
box.innerHTML+=`
<div class="card">
<img src="images/${i.img}">
<h4>${i.name}</h4>
<p>₹${i.price}</p>
<button onclick="buy('${i.name}')">Buy</button>
</div>`;
});
}

function buy(n){
selectedItem=n;
document.getElementById("qrModal").style.display="block";
}

function closeQR(){
document.getElementById("qrModal").style.display="none";
}

function sendProof(){
window.open(`https://wa.me/${wa}?text=Payment%20done%20for%20${selectedItem}`);
}

function downloadQR(){
const a=document.createElement("a");
a.href="images/qr.png";
a.download="qr.png";
a.click();
}

function renderAdmin(){
const box=document.getElementById("adminItems");
if(!box) return;
document.getElementById("waInput").value=wa;
box.innerHTML="";
items.forEach((i,idx)=>{
box.innerHTML+=`
<div class="admin-item">
<input value="${i.name}" onchange="items[${idx}].name=this.value">
<input type="number" value="${i.price}" onchange="items[${idx}].price=this.value">
<button onclick="saveItems()">Save</button>
</div>`;
});
}

function saveItems(){
localStorage.setItem("items",JSON.stringify(items));
alert("Saved");
renderUser();
}

function saveWA(){
wa=document.getElementById("waInput").value;
localStorage.setItem("wa",wa);
alert("WhatsApp Saved");
}

renderUser();
renderAdmin();
