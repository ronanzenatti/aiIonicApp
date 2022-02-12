import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Language',
      url: '/language',
      icon: 'reader-outline',
      techs: [
        {
          name: 'Language Understanding (LUIS)',
          url: '/luis',
          icon: 'newspaper-outline',
          description: 'Extract meaning from natural language',
        },
        {
          name: 'Language',
          url: '/languafe',
          icon: 'chatbubble-outline',
          description:
            'Detect sentiment, key phrases, entities and human language type in text',
        },
        {
          name: 'Translator',
          url: '/translator',
          icon: 'language-outline',
          description: 'Translate text in near real-time',
        },
      ],
    },
    {
      title: 'Speech',
      url: '/speech',
      icon: 'chatbubbles-outline',
      techs: [
        {
          name: 'Speech-to-text',
          url: '/speech-to-text',
          icon: 'chatbubble-ellipses-outline',
          description:
            'Enable real-time transcription of audio streams into text',
        },
        {
          name: 'Text-to-speech',
          url: '/text-to-speech',
          icon: 'chatbox-ellipses-outline',
          description:
            'Enable your applications, tools, or devices to convert text into human-like synthesized speech',
        },
        {
          name: 'Speech Translation',
          url: '/speech-translation',
          icon: 'language-outline',
          description:
            'Enable real-time, multi-language speech-to-speech and speech-to-text translation of audio streams',
        },
      ],
    },
    {
      title: 'Vision',
      url: '/vision',
      icon: 'eye',
      techs: [
        {
          name: 'Computer Vision',
          url: 'computer-vision',
          icon: 'image-outline',
          description: 'Analyze images and recognize text, objects, and more',
        },
        {
          name: 'Face',
          url: '/face',
          icon: 'people-outline',
          description: 'Build, deploy, and improve your own image classifiers',
        },
        {
          name: 'Custom Vision',
          url: '/custom-vision',
          icon: 'camera-outline',
          description: 'Build, deploy, and improve your own image classifiers',
        },
      ],
    },
  ];
  constructor() {}
}
