'use strict'

const Debug = require('debug')
const debug = new Debug('app:routes/committee.js')

module.exports = router => {
  router.get('/committee', index)
}

const index = async ctx => {
  debug('rendering committee page')
  await ctx.render('committee', {
    committee
  })
}

const committee = [
  {
    name: 'Russell Penn',
    role: 'President',
    avatar: 'rob',
    social: {
      facebook: 'profile.php?id=100009496727269'
    },
    bio: `
      <p>Hello!</p>
      <p>It's my pleasure to be the president of CompSoc for this year</p>
      <p>This year, I hope to continue the great work this society is doing and continue to grow it and appeal to more people!</p>
    `
  },
  {
    name: 'Alex Yates',
    role: 'Secretary',
    avatar: 'jodi',
    social: {
      facebook: 'jodi.swift.14'
    },
    bio: `<p>Hi, I'm Jodi! Hobbies include writing minutes, booking stuff and sending lots of emails :P</p>`
  },
  {
    name: 'Blayze Milward',
    role: 'Events <nobr>Co-ordinator</nobr>',
    avatar: 'blayze',
    social: {
      twitter: 'blayzeing',
      github: 'blayzeing',
      facebook: 'blayze.millward'
    },
    bio: `
      <p>I am Blayze: maker of things, wearer of blazers, rider of skateboards.</p>
      <p>I've been around for a while, having a lot to do with the first gamejams, but have spent the last year working at a defence company. I'm here to organize events, particularly those that involve tech. So, if you have any ideas or things you want to see done, I'm the man to talk to!</p>
    `
  },
  {
    name: 'Barnabas',
    role: 'Events <nobr>Co-ordinator</nobr>',
    avatar: 'russell',
    social: {},
    bio: ``
  },
  {
    name: 'Tom Thomas-Litman',
    role: 'Treasurer',
    avatar: 'tom',
    social: {
      facebook: 'thomaslitman'
    },
    bio: `
      <p>I am the money money man.</p>
      <p>“If a man does not have the sauce, then he is lost. But the same man can be lost in the sauce.” - Gucci Mane</p>
    `
  },
  {
    name: 'James Webb',
    role: 'Inclusions Officer',
    avatar: 'james',
    social: {
      facebook: 'JamesWebb8564'
    },
    bio: `<p>As inclusions officer I will be ensuring everything we do is accessible to everyone. Not feeling included? Hmu and we can fix it.</p>`
  },
  {
    name: 'Eeshan Jaiswal',
    role: 'General Committee',
    avatar: 'eeshan',
    social: {},
    bio: ``
  },
  {
    name: 'Louis Thorpe-Monaghan',
    role: 'Media Team',
    avatar: 'louis',
    social: {
      twitter: 'WeeabooLou',
      instagram: 'louis_t.m',
      facebook: 'Louuuiis'
    },
    bio: `
      <p>As a member of the Media Team, I am (at least partly) responsible for making sure everything looks suitably “bourgeois”, “on point”, “dank” and other popular words for describing the aesthetics of our society.</p>
      <p>Most importantly, if you feel uncomfortable by any of our font choices (say, oh I don't know, a rogue Comic Sans making an appearance), remember - IT'S NOT MY FAULT BLAME ROB.</p>
    `
  },
  {
    name: 'Alexander Yates',
    role: 'Organiser',
    avatar: 'alex',
    social: {},
    bio: ``
  },
  {
    name: 'Tim Carr',
    role: 'Organiser',
    avatar: 'tbd',
    social: {},
    bio: ``
  }
]
