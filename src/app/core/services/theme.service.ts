import { Injectable, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';
  
  // Signal pour l'état du thème
  public isDarkMode = signal<boolean>(false);
  
  // Vérifier si on est dans un navigateur
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    this.initializeTheme();
  }

  // Initialiser le thème en fonction des préférences sauvegardées ou du système
  private initializeTheme(): void {
    // Vérifier si on est dans un navigateur
    if (!this.isBrowser) {
      // En SSR, utiliser le thème clair par défaut
      this.isDarkMode.set(false);
      return;
    }
    
    // Vérifier si une préférence est sauvegardée dans le localStorage
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      // Utiliser la préférence sauvegardée
      this.setTheme(savedTheme === this.DARK_THEME);
    } else {
      // Utiliser la préférence du système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  // Basculer entre les thèmes
  public toggleTheme(): void {
    this.setTheme(!this.isDarkMode());
  }

  // Définir le thème
  private setTheme(isDark: boolean): void {
    // Mettre à jour le signal
    this.isDarkMode.set(isDark);
    
    // Vérifier si on est dans un navigateur
    if (!this.isBrowser) {
      return;
    }
    
    // Appliquer la classe au document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(this.THEME_KEY, this.DARK_THEME);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(this.THEME_KEY, this.LIGHT_THEME);
    }
  }
}