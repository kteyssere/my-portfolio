import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public langages = [
    { src: "assets/logos/langages/html-logo.png", name: "HTML" },
    { src: "assets/logos/langages/css-logo.png", name: "CSS" },
    { src: "assets/logos/langages/js-logo.png", name: "Javascript" },
    { src: "assets/logos/langages/ts-logo.png", name: "Typescript" },
    { src: "assets/logos/langages/php-logo.png", name: "PHP" },
    { src: "assets/logos/langages/sql-logo.png", name: "SQL" },
    { src: "assets/logos/langages/java-logo.png", name: "Java" },
    { src: "assets/logos/langages/swift-logo.png", name: "Swift" },
  ];

  public frameworks = [
    { src: "assets/logos/frameworks/symfony-logo.png", name: "Symfony" },
    { src: "assets/logos/frameworks/angular-logo.png", name: "Angular" },
    { src: "assets/logos/frameworks/ionic-logo.png", name: "Ionic" },
    { src: "assets/logos/frameworks/react-logo.png", name: "ReactJS" },
  ];

  public logiciels = [
    { src: "assets/logos/logiciels/phpstorm-logo.png", name: "PhpStorm" },
    { src: "assets/logos/logiciels/vs-code-logo.png", name: "Visual Studio Code" },
    { src: "assets/logos/logiciels/git-logo.png", name: "Git" },
    { src: "assets/logos/logiciels/phpmyadmin-logo.png", name: "PHP My Admin" },
    { src: "assets/logos/logiciels/eclipse-logo.png", name: "Eclipse" },
    { src: "assets/logos/logiciels/android-studio-logo.png", name: "Android Studio" },
    { src: "assets/logos/logiciels/xcode-logo.png", name: "Xcode" },
    { src: "assets/logos/logiciels/wordpress-logo.png", name: "WordPress" },
  ];

  public oss = [
    { src: "assets/logos/os/linux-logo.png", name: "Linux" },
    { src: "assets/logos/os/windows-logo.png", name: "Windows" },
    { src: "assets/logos/os/macos-logo.png", name: "MacOS" },
  ];

}
