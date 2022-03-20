import { Title } from "components";
import Icon from "./icon";

export default function Technologies() {
  return (
    <div>
      <Title title="Technologies" subTitle="Ce que je maîtrise le mieux" />

      <div className="flex flex-wrap items-center justify-center md:justify-between w-full max-w-4xl mx-auto pt-4 sm:mt-10">
        <Icon
          id="reactjs"
          src="/img/logo/react.webp"
          url="https://fr.reactjs.org/"
        >
          React JS et React Native
        </Icon>

        <Icon
          id="csharp"
          src="/img/logo/csharp.png"
          url="https://docs.microsoft.com/fr-fr/dotnet/csharp/tour-of-csharp/"
        >
          C#
        </Icon>

        <Icon
          id="js"
          src="/img/logo/javascript.png"
          url="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          className="lg:w-11 lg:h-11"
        >
          Javascript
        </Icon>

        <Icon
          id="ts"
          src="/img/logo/typescript.svg"
          url="https://www.typescriptlang.org/"
          className="lg:w-11 lg:h-11"
        >
          Typescript
        </Icon>

        <Icon
          id="nodejs"
          src="/img/logo/nodejs.png"
          url="https://nodejs.org/fr/"
          className="lg:w-14 lg:h-14"
        >
          Node JS
        </Icon>

        <Icon id="nextjs" src="/img/logo/nextjs.png" url="https://nextjs.org/">
          Next JS
        </Icon>

        <Icon
          id="tailwind"
          src="/img/logo/tailwind.png"
          url="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Icon>

        <Icon
          id="styled-components"
          src="/img/logo/styled-components.png"
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

      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto sm:mb-20">
        <Icon
          id="kubernetes"
          grayscale
          src="/img/logo/kubernetes.png"
          url="https://kubernetes.io/fr/"
          className="lg:w-9 lg:h-9"
        >
          Kubernetes
        </Icon>
        <Icon
          id="docker"
          grayscale
          src="/img/logo/docker.png"
          url="https://www.docker.com/"
          className="lg:w-9 lg:h-9"
        >
          Docker
        </Icon>
        <Icon
          id="docker-compose"
          grayscale
          src="/img/logo/docker-compose.png"
          url="https://docs.docker.com/compose/"
          className="lg:w-9 lg:h-9"
        >
          Docker compose
        </Icon>
        <Icon
          id="grafana"
          grayscale
          src="/img/logo/grafana.png"
          url="https://grafana.com/"
          className="lg:w-9 lg:h-9"
        >
          Grafana
        </Icon>
        <Icon
          id="kibana"
          grayscale
          src="/img/logo/kibana.png"
          url="https://www.elastic.co/fr/kibana/"
          className="lg:w-9 lg:h-9"
        >
          Kibana
        </Icon>
        <Icon
          id="jenkins"
          grayscale
          src="/img/logo/jenkins.png"
          url="https://www.jenkins.io/"
          className="lg:w-9 lg:h-9"
        >
          Jenkins
        </Icon>
        <Icon
          id="gitlab-cicd"
          grayscale
          src="/img/logo/gitlab.png"
          url="https://docs.gitlab.com/ee/ci/"
          className="lg:w-9 lg:h-9"
        >
          Pipeline Gitlab
        </Icon>
        <Icon
          id="git"
          grayscale
          src="/img/logo/git.png"
          url="https://git-scm.com/"
          className="lg:w-9 lg:h-9"
        >
          Git
        </Icon>
        <Icon
          id="sonar"
          grayscale
          src="/img/logo/sonar.png"
          url="https://www.sonarqube.org/"
          className="lg:w-9 lg:h-9"
        >
          Sonarqube
        </Icon>
        <Icon
          id="ansible"
          grayscale
          src="/img/logo/ansible.png"
          url="https://docs.ansible.com/ansible/latest/index.html"
          className="lg:w-9 lg:h-9"
        >
          Ansible
        </Icon>
        <Icon
          id="vagrant"
          grayscale
          src="/img/logo/vagrant.png"
          url="https://www.vagrantup.com/"
          className="lg:w-9 lg:h-9"
        >
          Vagrant
        </Icon>
        <Icon
          id="azure"
          grayscale
          src="/img/logo/azure.png"
          url="https://azure.microsoft.com/fr-fr/"
          className="lg:w-9 lg:h-9"
        >
          Microsoft Azure
        </Icon>
        <Icon
          id="dotnet"
          grayscale
          src="/img/logo/dotnet.png"
          url="https://dotnet.microsoft.com/en-us/"
          className="lg:w-9 lg:h-9"
        >
          Microsoft .NET
        </Icon>
        <Icon
          id="laravel"
          grayscale
          src="/img/logo/laravel.png"
          url="https://laravel.com/"
          className="lg:w-9 lg:h-9"
        >
          Laravel
        </Icon>
        <Icon
          id="symfony"
          grayscale
          src="/img/logo/symfony.png"
          url="https://symfony.com/"
          className="lg:w-9 lg:h-9"
        >
          Symfony
        </Icon>
        <Icon
          id="mongo"
          grayscale
          src="/img/logo/mongo.png"
          url="https://www.mongodb.com/"
          className="lg:w-9 lg:h-9"
        >
          MongoDB
        </Icon>
        <Icon
          id="firebase"
          grayscale
          src="/img/logo/firebase.png"
          url="https://firebase.google.com/"
          className="lg:w-9 lg:h-9"
        >
          Firebase
        </Icon>
        <Icon
          id="couchbase"
          grayscale
          src="/img/logo/couchbase.png"
          url="https://www.couchbase.com/fr"
          className="lg:w-9 lg:h-9"
        >
          Couchbase
        </Icon>
        <Icon
          id="sqlserver"
          grayscale
          src="/img/logo/sqlserver.png"
          url="https://www.microsoft.com/fr-fr/sql-server/"
          className="lg:w-9 lg:h-9"
        >
          SQL Server
        </Icon>
        <Icon
          id="postgresql"
          grayscale
          src="/img/logo/postgresql.png"
          url="https://www.postgresql.org/"
          className="lg:w-9 lg:h-9"
        >
          PostgreSQL
        </Icon>
        <Icon
          id="mysql"
          grayscale
          src="/img/logo/mysql.png"
          url="https://www.mysql.com/fr/"
          className="lg:w-9 lg:h-9"
        >
          MySQL
        </Icon>
        <Icon
          id="kafka"
          grayscale
          src="/img/logo/kafka.png"
          url="https://kafka.apache.org/"
          className="lg:w-9 lg:h-9"
        >
          Apache Kafka
        </Icon>
        <Icon
          id="solr"
          grayscale
          src="/img/logo/solr.png"
          url="https://solr.apache.org/"
          className="lg:w-9 lg:h-9"
        >
          Apache Solr
        </Icon>
      </div>
    </div>
  );
}
