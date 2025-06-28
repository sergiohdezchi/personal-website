import { Injectable } from '@angular/core';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition,
  query,
  stagger,
  animateChild
} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  // Fade In Animation
  fadeIn = trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('600ms ease-out', style({ opacity: 1 }))
    ])
  ]);
  
  // Fade In Up Animation
  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(20px)'
      }),
      animate('600ms ease-out', style({ 
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ])
  ]);
  
  // Fade In Down Animation
  fadeInDown = trigger('fadeInDown', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(-20px)'
      }),
      animate('600ms ease-out', style({ 
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ])
  ]);
  
  // Fade In Right Animation
  fadeInRight = trigger('fadeInRight', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(-20px)'
      }),
      animate('600ms ease-out', style({ 
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ])
  ]);
  
  // Fade In Left Animation
  fadeInLeft = trigger('fadeInLeft', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(20px)'
      }),
      animate('600ms ease-out', style({ 
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ])
  ]);
  
  // Zoom In Animation
  zoomIn = trigger('zoomIn', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'scale(0.8)'
      }),
      animate('600ms ease-out', style({ 
        opacity: 1,
        transform: 'scale(1)'
      }))
    ])
  ]);
  
  // Stagger List Animation
  listAnimation = trigger('listAnimation', [
    transition('* => *', [
      query(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        stagger(100, [
          animate('500ms ease-out', style({ 
            opacity: 1,
            transform: 'translateY(0)'
          }))
        ])
      ], { optional: true })
    ])
  ]);
  
  // Card Animation
  cardAnimation = trigger('cardAnimation', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(30px)'
      }),
      animate('600ms 300ms ease-out', style({ 
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ])
  ]);
  
  // Skill Animation
  skillAnimation = trigger('skillAnimation', [
    transition(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(-15px)'
      }),
      animate('400ms ease-out', style({ 
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ])
  ]);
  
  // Route Animation
  routeAnimation = trigger('routeAnimation', [
    transition('* => *', [
      style({ opacity: 0 }),
      animate('500ms ease-out', style({ opacity: 1 }))
    ])
  ]);
}
