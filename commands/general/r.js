module.exports = ({
  name: "alt",
  aliases: "ealt",
  code: `$eval[$message]
 $onlyif[$message[1]!=;{newEmbed:{description:bot dev only}}]
  $onlyif[$authorID==902067062938157066;need development permission]`
})