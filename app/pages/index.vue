<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/getting-started/discord',
    icon: 'i-ic-round-discord',
  },
  {
    label: 'Get started',
    to: '/getting-started/telegram',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-ic-round-telegram',
  },
  {
    label: 'Überblick',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

const features = [
  {
    title: 'Benachrichtigung bei neuen Terminvorschlägen',
    description: 'Wenn eure Gegner neue Terminvorschläge zu Matches vorschlagen, bekommt ihr sofort eine Benachrichtigung. Dort sieht man direkt alle vorgeschlagenen Zeiten des gegnerischen Teams. Dazu gibt es weiterführende Links zum Spieltag und gegnerischen Team.',
    icon: 'i-lucide-smile',
  },
  {
    title: 'Terminbestätigungen zu jedem Match',
    description: 'Sobald eure Gegner einen Zeitvorschlag angenommen haben oder ihr einen angenommen habt, schickt euch der PrimeBot eine passende Nachricht als Terminbestätigung. Sehr praktisch, denn dabei ist nicht nur auch das festgelegte Datum für das Spiel, sondern auch weiterführende Links zum Spieltag und gegnerischen Team!',
    icon: 'i-lucide-type',
  },
  {
    title: 'Neue Lineups Eurer Gegner',
    description: 'Ihr werdet benachrichtigt, sobald ein gegnerisches Team ein neues Lineup aufgestellt hat. Und das auch, wenn das Gegnerteam ihr Lineup noch einmal ändert. Passend dazu gibt es direkt einen op.gg Link oder u.gg Link mit allen Spieler:innen, die aufgestellt wurden.',
    icon: 'i-lucide-moon',
  },
  {
    title: 'Neue Kommentare bei Matches',
    description: 'Ihr werdet benachrichtigt, sobald jemand einen neuen Kommentar unter einem Match geschrieben hat. Ausgenommen sind davon Kommentare von eigenen Teammitgliedern.',
    icon: 'i-lucide-moon',
  },
  {
    title: 'Detaillierte Informationen zu Matches bei Bedarf',
    description: 'Lasst euch auf Wunsch sehr ausführliche Informationen zu Matches anzeigen',
    icon: 'i-lucide-moon',
  },
  {
    title: 'Wöchentliche Übersicht der noch offenen Spiele',
    description: 'Zu Beginn jeder neuen Spielwoche bekommt ihr eine praktische Übersicht aller verbleibenden Spiele. Hier gibt es nicht nur Links zum nächsten Match, sondern auch aktuelle Spieltermine und Links zum aktuellen Lineup, falls die Gegner schon eins aufgestellt haben.',
    icon: 'i-lucide-moon',
  }
]

</script>

<template>
  <UPageHero
      class="flex items-center justify-center min-h-[calc(100vh-var(--ui-header-height))]"
      title="PrimeBot"
      orientation="vertical"
      reverse
      :links="links"
  >
    <div class="flex justify-center">
      <Icon name="primebot:logo-filled"/>
    </div>
  </UPageHero>
  <UPageSection
      title="Der einfache Weg euer Prime League Team zu organisieren."
  >
    <template #description>
      <p>Der PrimeBot ist ein Discord- und Telegrambot, der dich und dein Team bei der Organisation eurer Matches unterstützt, indem er euch zu allen Änderungen Benachrichtigungen schickt.
        Und das direkt in eure Discord-Channels oder Telegram-Gruppen.</p>
      <p>
        Die Prime League ist die größte Liga für alle League of Legends Spieler:innen der DACH-Region.
      </p>
    </template>
  </UPageSection>
  <UPageSection
      title="Features"
      :features="features"
  />
</template>
