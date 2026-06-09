# Runbook recette

## Compte temporaire

Le compte de recette utilisé pour les tests fonctionnels est `jcara78`.

Pendant la première phase de test, le mot de passe temporaire associé est :

```text
password!123
```

Action prévue : remplacer ce compte par un compte SSO applicatif au prochain commit de durcissement.

## Points de contrôle

- Vérifier `/api/status`
- Tester une connexion QA
- Désactiver `qaLogin` avant release
