Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :trips, except: %i[new edit] do
    resources :hotels, except: %i[new edit]
    resources :providers, except: %i[new edit]
    resources :stops, except: %i[new edit]
  end
end
