class ProvidersController < ApplicationController
  before_action :set_provider, only: %i[show update destroy]
  before_action :set_trip, only: %i[index create show update destroy]

  def index
    render json: @trip.providers, status: :ok
  end

  def show
    render json: @provider, status: :ok
  end

  def create
    @provider = @trip.providers.create(provider_params)
    render json: @trip.providers, status: :ok if @provider
  end

  def update
    @provider.update(provider_params)
    render json: @provider, status: :ok
  end

  def destroy
    render json: @trip.providers, status: :ok if @provider.destroy()
  end

  private

  def set_provider
    provider = params[:id] || params[:provider_id]
    @provider = Provider.find(provider)
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def provider_params
    params.require(:provider).permit(:name, :date, :note,
                                      cost_attributes: %i[amount])
  end
end
