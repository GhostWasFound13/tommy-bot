module.exports = ({
  name: "eval",
  aliases: "e",
  code: `$eval[$message]
 $onlyif[$message[1]!=;{newEmbed:{description:bot dev only}}]
  $onlyif[$authorID==882180542517354536;only develop;]`
})