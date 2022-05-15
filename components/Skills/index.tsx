import { Title } from "components";
import Icon from "./icon";

export default function Skills() {
  return (
    <div id="skills">
      <Title title="Compétences" subTitle="Ce que je maîtrise le mieux" />

      <div className="flex flex-wrap items-center justify-center md:justify-between w-full max-w-4xl mx-auto pt-4 sm:mt-10">
        <Icon
          id="reactjs"
          src="/lucasconsejo/logo/react.webp"
          url="https://fr.reactjs.org/"
        >
          React JS et React Native
        </Icon>

        <Icon
          id="csharp"
          src="/lucasconsejo/logo/csharp.webp"
          url="https://docs.microsoft.com/fr-fr/dotnet/csharp/tour-of-csharp/"
        >
          C#
        </Icon>

        <Icon
          id="js"
          src="/lucasconsejo/logo/javascript.webp"
          url="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          className="lg:w-11 lg:h-11"
        >
          Javascript
        </Icon>

        <Icon
          id="ts"
          src="/lucasconsejo/logo/typescript.svg"
          url="https://www.typescriptlang.org/"
          className="lg:w-11 lg:h-11"
        >
          Typescript
        </Icon>

        <Icon
          id="nodejs"
          src="/lucasconsejo/logo/nodejs.webp"
          url="https://nodejs.org/fr/"
          className="lg:w-14 lg:h-14"
        >
          Node JS
        </Icon>

        <Icon id="nextjs" src="/lucasconsejo/logo/nextjs.webp" url="https://nextjs.org/">
          Next JS
        </Icon>

        <Icon
          id="tailwind"
          src="/lucasconsejo/logo/tailwind.webp"
          url="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Icon>

        <Icon
          id="styled-components"
          src="/lucasconsejo/logo/styled-components.webp"
          url="https://styled-components.com/"
          className="w-20 h-20 lg:w-20 lg:h-20"
        >
          Styled-components
        </Icon>
      </div>

      <div className="flex items-center mt-2 mb-4 max-w-[16rem] w-full space-x-2 mx-auto">
        <div className="h-px flex-grow bg-white/20"></div>
        <div className="text-white/30 text-md font-medium uppercase">
          autres
        </div>
        <div className="h-px flex-grow bg-white/20"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto mb-3">
        <Icon
          id="kubernetes"
          grayscale
          src="/lucasconsejo/logo/kubernetes.webp"
          url="https://kubernetes.io/fr/"
          className="lg:w-9 lg:h-9"
        >
          Kubernetes
        </Icon>
        <Icon
          id="docker"
          grayscale
          src="/lucasconsejo/logo/docker.webp"
          url="https://www.docker.com/"
          className="lg:w-9 lg:h-9"
        >
          Docker
        </Icon>
        <Icon
          id="docker-compose"
          grayscale
          src="/lucasconsejo/logo/docker-compose.webp"
          url="https://docs.docker.com/compose/"
          className="lg:w-9 lg:h-9"
        >
          Docker compose
        </Icon>
        <Icon
          id="grafana"
          grayscale
          src="/lucasconsejo/logo/grafana.webp"
          url="https://grafana.com/"
          className="lg:w-9 lg:h-9"
        >
          Grafana
        </Icon>
        <Icon
          id="kibana"
          grayscale
          src="/lucasconsejo/logo/kibana.webp"
          url="https://www.elastic.co/fr/kibana/"
          className="lg:w-9 lg:h-9"
        >
          Kibana
        </Icon>
        <Icon
          id="jenkins"
          grayscale
          src="/lucasconsejo/logo/jenkins.webp"
          url="https://www.jenkins.io/"
          className="lg:w-9 lg:h-9"
        >
          Jenkins
        </Icon>
        <Icon
          id="gitlab-cicd"
          grayscale
          src="/lucasconsejo/logo/gitlab.webp"
          url="https://docs.gitlab.com/ee/ci/"
          className="lg:w-9 lg:h-9"
        >
          Pipeline Gitlab
        </Icon>
        <Icon
          id="git"
          grayscale
          src="/lucasconsejo/logo/git.webp"
          url="https://git-scm.com/"
          className="lg:w-9 lg:h-9"
        >
          Git
        </Icon>
        <Icon
          id="sonar"
          grayscale
          src="/lucasconsejo/logo/sonar.webp"
          url="https://www.sonarqube.org/"
          className="lg:w-9 lg:h-9"
        >
          Sonarqube
        </Icon>
        <Icon
          id="jest"
          grayscale
          src="/lucasconsejo/logo/jest.webp"
          url="https://jestjs.io/fr/"
          className="lg:w-8 lg:h-8"
        >
          Jest
        </Icon>
        <Icon
          id="ansible"
          grayscale
          src="/lucasconsejo/logo/ansible.webp"
          url="https://docs.ansible.com/ansible/latest/index.html"
          className="lg:w-9 lg:h-9"
        >
          Ansible
        </Icon>
        <Icon
          id="vagrant"
          grayscale
          src="/lucasconsejo/logo/vagrant.webp"
          url="https://www.vagrantup.com/"
          className="lg:w-9 lg:h-9"
        >
          Vagrant
        </Icon>
        <Icon
          id="azure"
          grayscale
          src="/lucasconsejo/logo/azure.webp"
          url="https://azure.microsoft.com/fr-fr/"
          className="lg:w-9 lg:h-9"
        >
          Microsoft Azure
        </Icon>
        <Icon
          id="dotnet"
          grayscale
          src="/lucasconsejo/logo/dotnet.webp"
          url="https://dotnet.microsoft.com/en-us/"
          className="lg:w-9 lg:h-9"
        >
          Microsoft .NET
        </Icon>
        <Icon
          id="laravel"
          grayscale
          src="/lucasconsejo/logo/laravel.webp"
          url="https://laravel.com/"
          className="lg:w-9 lg:h-9"
        >
          Laravel
        </Icon>
        <Icon
          id="symfony"
          grayscale
          src="/lucasconsejo/logo/symfony.webp"
          url="https://symfony.com/"
          className="lg:w-9 lg:h-9"
        >
          Symfony
        </Icon>
        <Icon
          id="mongo"
          grayscale
          src="/lucasconsejo/logo/mongo.webp"
          url="https://www.mongodb.com/"
          className="lg:w-9 lg:h-9"
        >
          MongoDB
        </Icon>
        <Icon
          id="firebase"
          grayscale
          src="/lucasconsejo/logo/firebase.webp"
          url="https://firebase.google.com/"
          className="lg:w-9 lg:h-9"
        >
          Firebase
        </Icon>
        <Icon
          id="couchbase"
          grayscale
          src="/lucasconsejo/logo/couchbase.webp"
          url="https://www.couchbase.com/fr"
          className="lg:w-9 lg:h-9"
        >
          Couchbase
        </Icon>
        <Icon
          id="sqlserver"
          grayscale
          src="/lucasconsejo/logo/sqlserver.webp"
          url="https://www.microsoft.com/fr-fr/sql-server/"
          className="lg:w-9 lg:h-9"
        >
          SQL Server
        </Icon>
        <Icon
          id="postgresql"
          grayscale
          src="/lucasconsejo/logo/postgresql.webp"
          url="https://www.postgresql.org/"
          className="lg:w-9 lg:h-9"
        >
          PostgreSQL
        </Icon>
        <Icon
          id="mysql"
          grayscale
          src="/lucasconsejo/logo/mysql.webp"
          url="https://www.mysql.com/fr/"
          className="lg:w-9 lg:h-9"
        >
          MySQL
        </Icon>
        <Icon
          id="kafka"
          grayscale
          src="/lucasconsejo/logo/kafka.webp"
          url="https://kafka.apache.org/"
          className="lg:w-9 lg:h-9"
        >
          Apache Kafka
        </Icon>
        <Icon
          id="solr"
          grayscale
          src="/lucasconsejo/logo/solr.webp"
          url="https://solr.apache.org/"
          className="lg:w-9 lg:h-9"
        >
          Apache Solr
        </Icon>
        <Icon
          id="figma"
          grayscale
          src="/lucasconsejo/logo/figma.webp"
          url="https://www.figma.com/"
          className="lg:w-12 lg:h-12"
        >
          Figma
        </Icon>
        <Icon
          id="jira"
          grayscale
          src="/lucasconsejo/logo/jira.webp"
          url="https://www.atlassian.com/fr/software/jira"
          className="lg:w-9 lg:h-9"
        >
          Jira
        </Icon>
        <Icon
          id="raspberry"
          grayscale
          src="/lucasconsejo/logo/raspberry.webp"
          url="https://www.raspberrypi.com/"
          className="lg:w-10 lg:h-10"
        >
          Raspberry Pi
        </Icon>
        <Icon
          id="arduino"
          grayscale
          src="/lucasconsejo/logo/arduino.webp"
          url="https://www.arduino.cc/"
          className="lg:w-10 lg:h-10"
        >
          Arduino
        </Icon>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto">
        <div className="text-zinc-200 mx-2 bg-zinc-800/80 font-medium p-2.5 rounded leading-4 border border-1 border-zinc-700/70 shadow-[rgb(255,255,255,0.16)_0px_-1px_1px_inset] hover:bg-purple-700 cursor-default">
          Méthode agile
        </div>
        <div className="text-zinc-200 mx-2 bg-zinc-800/80 font-medium p-2.5 rounded leading-4 border border-1 border-zinc-700/70 shadow-[rgb(255,255,255,0.16)_0px_-1px_1px_inset] hover:bg-purple-700 cursor-default">
          Culture DevOps
        </div>
      </div>

      <div className="flex items-center mt-10 mb-4 max-w-[16rem] w-full space-x-2 mx-auto">
        <div className="h-px flex-grow bg-white/20"></div>
        <div className="text-white/30 text-md font-medium uppercase">
          Environnement
        </div>
        <div className="h-px flex-grow bg-white/20"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto sm:mb-20">
        <Icon
          id="macos"
          grayscale
          src="/lucasconsejo/logo/apple.svg"
          url="https://www.apple.com/fr/macos/monterey/"
          className="lg:w-9 lg:h-9"
        >
          MacOS sur Macbook Pro perso
        </Icon>
        <Icon
          id="windows"
          grayscale
          src="/lucasconsejo/logo/windows.webp"
          url="https://www.microsoft.com/fr-fr/software-download/windows10ISO?navItemId=daef1c13-0b0d-425e-905b-df14c9806f33"
          className="lg:w-9 lg:h-9"
        >
          Windows 10 sur ordi perso/travail
        </Icon>
        <Icon
          id="linux"
          grayscale
          src="/lucasconsejo/logo/linux.webp"
          url="https://www.linux.org/"
          className="lg:w-10 lg:h-10"
        >
          Ubuntu/Debian/Raspbian sur serveur
        </Icon>
      </div>
    </div>
  );
}
